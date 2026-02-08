import { tabs } from "../../App";

const activeTabId = tabs[0].id
const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

export const Tabs = ({ tabs, onTabSelected }) => {
  return (
    tabs.map(tab => (
     <div 
       data-cy="TabsComponent" 
       key={tab.id}
     >

    <div className="tabs is-boxed">
      <ul>
        <li
          className={activeTab.id === tab.id?'is-active':''}
          data-cy="Tab"
          key={tab.id}
         >
          <a onClick={() => tab.id !== activeTab?onTabSelected(tab.id):null}
            href={`#${tab.id}`} data-cy="TabLink">
            {tab.title}
          </a>
        </li>
      </ul>
    </div>

  <div className="block" data-cy="TabContent">
    {tab.content}
  </div>

    </div>
))
  )
};
