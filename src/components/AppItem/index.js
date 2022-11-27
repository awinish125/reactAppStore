const AppItem = props => {
  const {appList} = props
  const {appName, imageUrl} = appList
  return (
    <li>
      <h1>hii</h1>
      <img src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
