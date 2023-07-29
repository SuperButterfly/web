import './comments.css'
import Tag from './Tag'
import Comment from './Comment'
const urlbase = '/workspace/assets/'

const commentsarray = {
  comment: {
    statustag: '[status]',
    subject: 'subject of post or title',
    user: 'username',
    body: 'text of the post. Because bla bla bla',
    reviewsCount: 1,
    createdAt: 'just now'
  },
  reaction: {
    iconsrc: urlbase + 'circulo.svg',
    iconname: 'reaction',
    count: 1
  },
  cardImage: {
    src: urlbase + 'imagen.svg',
    title: 'circulo'
  },
  tags: [{ title: 'tag', src: 'imagen', size: '' }]
}

const Comments = () => {
  return (
    <div className="comments-container">
      <div className="comments-container01">
        <div className="comments-container02">
          <svg viewBox="0 0 1024 1024" className="comments-icon">
            <path d="M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
          </svg>
          <input
            type="text"
            name="buscar"
            value="Buscar"
            className="comments-textinput input"
          />
        </div>
        <div className="comments-container03">
          <div className="comments-container04">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="comments-icon02"
            >
              <path d="M391.429 742.286l350.857-350.857c14.286-14.286 14.286-37.143 0-51.429l-58.286-58.286c-14.286-14.286-37.143-14.286-51.429 0l-266.857 266.857-120.571-120.571c-14.286-14.286-37.143-14.286-51.429 0l-58.286 58.286c-14.286 14.286-14.286 37.143 0 51.429l204.571 204.571c14.286 14.286 37.143 14.286 51.429 0zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
          </div>
          <div className="comments-container05">
            <svg viewBox="0 0 1024 1024" className="comments-icon04">
              <path d="M512 192c-54.932 0-107.988 8.662-157.694 25.742-46.712 16.054-88.306 38.744-123.628 67.444-66.214 53.798-102.678 122.984-102.678 194.814 0 40.298 11.188 79.378 33.252 116.152 22.752 37.92 56.982 72.586 98.988 100.252 30.356 19.992 50.78 51.948 56.176 87.894 1.8 11.984 2.928 24.088 3.37 36.124 7.47-6.194 14.75-12.846 21.88-19.976 24.154-24.152 56.78-37.49 90.502-37.49 5.368 0 10.762 0.336 16.156 1.024 20.974 2.666 42.398 4.020 63.676 4.020 54.934 0 107.988-8.66 157.694-25.742 46.712-16.054 88.306-38.744 123.628-67.444 66.214-53.796 102.678-122.984 102.678-194.814s-36.464-141.016-102.678-194.814c-35.322-28.698-76.916-51.39-123.628-67.444-49.706-17.080-102.76-25.742-157.694-25.742zM512 64v0c282.77 0 512 186.25 512 416 0 229.752-229.23 416-512 416-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
            </svg>
            <span className="comments-text">New post</span>
          </div>
        </div>
      </div>
      <div className="comments-container06">
        <div className="comments-container07">
          <div className="comments-arrows">
            <svg
              viewBox="0 0 438.85714285714283 1024"
              className="comments-icon06"
            >
              <path d="M437.143 742.286c2.857 6.857 1.714 14.286-2.857 20l-200 219.429c-3.429 3.429-8 5.714-13.143 5.714v0c-5.143 0-10.286-2.286-13.714-5.714l-202.857-219.429c-4.571-5.714-5.714-13.143-2.857-20 2.857-6.286 9.143-10.857 16.571-10.857h128v-713.143c0-10.286 8-18.286 18.286-18.286h109.714c10.286 0 18.286 8 18.286 18.286v713.143h128c7.429 0 13.714 4 16.571 10.857z"></path>
            </svg>
            <svg
              viewBox="0 0 438.85714285714283 1024"
              className="comments-icon08"
            >
              <path d="M437.143 281.714c-2.857 6.286-9.143 10.857-16.571 10.857h-128v713.143c0 10.286-8 18.286-18.286 18.286h-109.714c-10.286 0-18.286-8-18.286-18.286v-713.143h-128c-7.429 0-13.714-4-16.571-10.857s-1.714-14.286 2.857-20l200-219.429c3.429-3.429 8-5.714 13.143-5.714v0c5.143 0 10.286 2.286 13.714 5.714l202.857 219.429c4.571 5.714 5.714 13.143 2.857 20z"></path>
            </svg>
          </div>
          <select name="orden" className="comments-select">
            <option value="ordenar">
              <span className="comments-text1">Ordenar y ver</span>
            </option>
          </select>
        </div>
        <div className="comments-line"></div>
        <Tag title={'tag'} src={'imagen'} size={'-big'} />
        <Tag title={'tag'} src={'imagen'} size={'-big'} />
        <Tag title={'tag'} src={'imagen'} size={'-big'} />
        <Tag title={'tag'} src={'imagen'} size={'-big'} />
        <div className="comments-container13">
          <select name="orden" className="comments-select1">
            <option value="All">
              <span className="comments-text2">All</span>
            </option>
          </select>
          <div className="comments-container14"></div>
        </div>
      </div>
      <Comment {...commentsarray} />
      <Comment {...commentsarray} />
      <Comment {...commentsarray} />
    </div>
  )
}

export default Comments
