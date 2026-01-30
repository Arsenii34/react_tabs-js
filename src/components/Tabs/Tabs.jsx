export const Tabs = (tabs, activeTabId, handleSelect) => {
  {
    tabs.map(tab => (
      <li
       className={activeTabId === tab.id?'is-active':''}
       data-cy="Tab"
       key={tab.id}
       >
        <a onClick={() => tab.id !== activeTabId?handleSelect(tab.id):null}
         ref={`#${id}`} data-cy="TabLink">
          {tab.title}
        </a>
      </li>))
  }
};
