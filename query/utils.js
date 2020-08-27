const postsData = {}

const handleEvent = ({ type, data }) => {
  if (type === 'postCreated') {
    postsData[data.id] = { ...data, comments: [] }
    console.log('POST CREATEDS!!!!!!')
  }
  if (type === 'commentCreated') {
    postsData[data.postId].comments.push(data)
    console.log('COMMENT CREATEDS!!!!!!', postsData, data)
    console.log('postsData', postsData)
  }
  if (type === 'commentUpdated') {
    const commentToUpdate = postsData[data.postId].comments.find(x => x.id === data.id)
    commentToUpdate.status = data.status
  }
}

module.exports = {
  handleEvent,
  postsData
}
