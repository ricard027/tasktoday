
import ClipLoader from 'react-spinners/ClipLoader'

const Loading = ({ loading }) => {
  const override = {
    CSSProperties: {
      display: 'block',
      margin: '0 auto',
      borderColor: 'red'
    }
  }

  return (
        <ClipLoader
        color='#333'
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Loading
