import React, { useEffect } from 'react';
import './index.css';
import { shell } from 'electron';
import { useHistory } from 'react-router';
import Logo from '@assets/logo.png';
import { ROUTER_KEY, ROUTER_ENTRY } from '@src/common/constants/router';
import { isHttpOrHttpsUrl } from '@src/common/utils/router';
import { useSelector, useDispatch } from 'react-redux';

function Root() {
  const history = useHistory();
  const dispatch = useDispatch();
  const appName = useSelector((state: any) => state.globalModel.appName);

  useEffect(() => {
    setTimeout(() => {
      console.log('3s 后修改...');
      dispatch({
        type: 'globalModel/setStore',
        payload: {
          key: `appName`,
          values: 'MiuResumeMook',
        },
      });
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('appName = ', appName);
  }, [appName]);

  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      if (router.key !== ROUTER_KEY.resume) {
        history.push(router.url);
      } else {
        history.push(router.url);
      }
    }
  };
  return (
    <div className="root">
      <div className="container">
        <img src={Logo} alt="" />
        <div className="title">ResumeMook</div>
        <div className="tips">一个模板简历制作平台，让写简历更加简单且出众 ~</div>
        <div className="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div
                key={router.key}
                className="item"
                onClick={() => {
                  onRouterToLink(router);
                }}
              >
                {router.text}
              </div>
            );
          })}
        </div>
        <div className="copyright">
          <div className="footer">
            <p className="copyright">
              Copyright © 2022-{new Date().getFullYear()} All Rights Reserved. Copyright By Miu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Root;
