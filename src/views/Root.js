/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTempate';
import ArticlesView from 'views/Articles';
import NotesView from 'views/Notes';
import TwittersView from 'views/Twitters';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route path="/" exact component={NotesView} />
        <Route path="/articles" component={ArticlesView} />
        <Route path="/twitters" component={TwittersView} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
