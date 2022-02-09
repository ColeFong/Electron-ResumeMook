/*
 * @Description:
 * @Author: Miu
 * @LastEditors: Miu
 * @Date: 2022-02-09 17:08:00
 * @LastEditTime: 2022-02-09 18:00:25
 */
import React, { useEffect } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';
import TemplateList from '@src/container/templateList';
import ROUTER from '@common/constants/router';
import useReadDirAssetsTemplateHooks from './hooks/useReadDirAssetsTemplateHooks';
function Router() {
  const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();

  useEffect(() => {
    readDirAssetsTemplateHooks();
  }, []);
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
        <Route path={ROUTER.templateList} exact>
          <TemplateList />
        </Route>
      </Switch>
      {/* 默认重定向到首页 */}
      <Redirect to={ROUTER.root} />
    </HashRouter>
  );
}
export default Router;
