import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];


export const App = () => (
  const [tabses setTabses] = useState('');
  <div className="section">
    <h1 className="title">Selected tab is {tabses.title}</h1>

    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          <Tabs
            tabs={tabs}
            activeTabId={activeTabId}
            onTabSelected={handleSelect}
          />

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabses.content}
      </div>
    </div>
  </div>
);
