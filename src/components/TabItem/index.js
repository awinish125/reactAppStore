// Write your code here

const TabItem = props => {
  const {tabList, updateAppId, activated} = props
  const {displayText, tabId} = tabList

  const updateID = () => {
    updateAppId(tabId)
  }

  const classAddName = activated ? 'active' : ''

  return (
    <li onClick={updateID} className={classAddName}>
      <button type="button">{displayText}</button>
    </li>
  )
}

export default TabItem
