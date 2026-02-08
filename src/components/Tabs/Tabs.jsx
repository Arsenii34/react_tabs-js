import { tabs } from "../../App";




export const Tabs = ({ tabs, activeTab, onTabSelected }) => {

  return (
     <div
       data-cy="TabsComponent"
     >

    <div className="tabs is-boxed">

        <ul>
          {tabs.map(tab => (
        <li
          className={activeTab.id === tab.id?'is-active':''}
          data-cy="Tab"
          key={tab.id}
         >
          <a onClick={() => tab.id !== activeTab.id?onTabSelected(tab.id):null}
            href={`#${tab.id}`} data-cy="TabLink">
            {tab.title}
          </a>
        </li>
         ))}
      </ul>

    </div>

  <div className="block" data-cy="TabContent">
    {activeTab.content}
  </div>

    </div>

  )
};
