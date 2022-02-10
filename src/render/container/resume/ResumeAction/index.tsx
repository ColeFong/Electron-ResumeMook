/**
 * @description 制作简历-操作区
 */
import React from 'react';
import './index.less';
import { useHistory, useParams } from 'react-router';
import MyButton from '@common/components/MyButton';
import { toPrintPdf } from '@common/utils/htmlToPdf';
import { useSelector } from 'react-redux';
import fileAction from '@common/utils/file';
import MyModal from '@common/components/MyModal';
import { createUID } from '@common/utils';
import { compilePath } from '@common/utils/router';
import ROUTER, { ROUTER_KEY } from '@common/constants/router';
import { intToDateString } from '@common/utils/time';
import { getAppPath } from '@common/utils/appPath';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@src/hooks/useGlobalConfigActionHooks';
import useClickAway from '@common/hooks/useClickAway';

function ResumeAction() {
  const history = useHistory();
  const routerParams = useParams<{ fromPath: string; templateId: string; templateIndex: string }>();
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const resume = useSelector((state: any) => state.resumeModel);
  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();
  const { ref, componentVisible, setComponentVisible } = useClickAway(false);

  // 返回首页
  const onBack = () => {
    if (routerParams?.fromPath === ROUTER_KEY.root) {
      history.push(compilePath(ROUTER.root));
    } else if (routerParams?.fromPath === ROUTER_KEY.templateList) {
      history.push(compilePath(ROUTER.templateList));
    } else {
      console.log('here');
    }
  };

  // 导出PDF
  const exportPdf = () => {
    toPrintPdf(`${base?.username}-${base?.school}-${work?.job}`);
    setComponentVisible(false);
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      if (value?.resumeSavePath) {
        saveResumeJson(value?.resumeSavePath);
      } else {
        // 不存在默认路径，则设置默认路径并更新文件内容
        getAppPath().then((appPath: string) => {
          updateGlobalConfigFile('resumeSavePath', `${appPath}resumeCache`);
          saveResumeJson(`${appPath}resumeCache`);
        });
      }
    });
  };

  // 存储数据json
  const saveResumeJson = (resumeSavePath: string) => {
    const date = intToDateString(new Date().valueOf(), '-');
    const prefix = `${date}-${base?.username}-${base?.school}-${work?.job}-${createUID()}.json`;
    // 如果路径中不存在 resumeCache 文件夹，则默认创建此文件夹
    if (resumeSavePath && resumeSavePath.search('resumeCache') > -1) {
      fileAction?.write(`${resumeSavePath}/${prefix}`, resume, 'utf8');
    } else {
      fileAction
        ?.mkdirDir(`${resumeSavePath}/resumeCache`)
        .then((path) => {
          if (path) {
            fileAction?.write(`${path}/${prefix}`, resume, 'utf8');
          }
        })
        .catch(() => {
          console.log('创建文件夹失败');
        });
    }
  };

  return (
    <div styleName="actions">
      <div styleName="back" onClick={onBack}>
        返回
      </div>
      <MyButton size="middle" className="export-btn" onClick={() => setComponentVisible(true)}>
        导出PDF
      </MyButton>
      {componentVisible && (
        <MyModal.Confirm
          eleRef={ref}
          title="确定要打印简历吗？"
          description="请确保信息的正确，目前仅支持单页打印哦～"
          config={{
            cancelBtn: {
              isShow: true,
              callback: () => setComponentVisible(false),
            },
            submitBtn: {
              isShow: true,
              callback: exportPdf,
            },
          }}
        />
      )}
    </div>
  );
}

export default ResumeAction;
