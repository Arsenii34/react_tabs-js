import { tabs } from "../../App";




export const Tabs = ({ tabs, activeTab, onTabSelected }) => {

  return (
    tabs.map(tab => (
     <div
       data-cy="TabsComponent"
       key={tab.id}
     >

    <div className="tabs is-boxed">
      <h1 className="title">Selected tab is {activeTab.title}</h1>
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
    {activeTab.content}
  </div>

    </div>
))
  )
};
