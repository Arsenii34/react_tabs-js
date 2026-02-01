export const Tabs = ({tabs, activeTabId, handleSelect}) => {
  return ({
    tabs.map(tab => (
      <li
       className={activeTabId === tab.id?'is-active':''}
       data-cy="Tab"
       key={tab.id}
       >
        <a onClick={() => tab.id !== activeTabId?handleSelect(tab.id):null}
         href={`#${id}`} data-cy="TabLink">
          {tab.title}
        </a>
      </li>))
  })
};
