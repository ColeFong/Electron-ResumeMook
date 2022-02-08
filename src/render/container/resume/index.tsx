import React from 'react';
import './index.css';
import fileAction from '@src/common/utils/file';
import { getAppPath } from '@src/common/utils/apppath';

function Resume() {
  getAppPath().then((rootPath: string) => {
    console.log('应用程序的目录路径为: ', rootPath);
    console.log('文件读取，内容数据为: ');
    fileAction.write(`${rootPath}app/renderer/container/resume/test.tsx`, 'Testing...', 'utf-8').then((data: any) => {
      console.log(data);
    });
  });

  return (
    <>
      <div>简历模块</div>
    </>
  );
}
export default Resume;
