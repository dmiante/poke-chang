import ContentLoader from 'react-content-loader'

export const LoaderItem = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox='0 0 400 460'
    backgroundColor='#dedede'
    foregroundColor='#ecebeb'
  >
    <circle cx='31' cy='323' r='12' />
    <rect x='19' y='343' rx='2' ry='2' width='108' height='19' />
    <rect x='0' y='3' rx='2' ry='2' width='296' height='296' />
    <rect x='186' y='309' rx='0' ry='0' width='93' height='27' />
    <rect x='185' y='340' rx='0' ry='0' width='93' height='27' />
  </ContentLoader>
)

export const LoaderGrid = () => {
  // Get values from props
  // const { rows, columns, coverHeight, coverWidth, padding, speed } = props;

  // Hardcoded values
  const rows = 2
  const columns = 5
  const coverHeight = 85
  const coverWidth = 65
  const padding = 5
  const speed = 1

  const coverHeightWithPadding = coverHeight + padding
  const coverWidthWithPadding = coverWidth + padding
  const initial = 35
  const covers = Array(columns * rows).fill(1)

  return (
    <ContentLoader
      speed={speed}
      width={columns * coverWidthWithPadding}
      height={rows * coverHeightWithPadding}
      primaryColor='#242b34'
      secondaryColor='#343d4c'
    >
      <rect
        x='0'
        y='0'
        rx='0'
        ry='0'
        width={columns * coverWidthWithPadding - padding}
        height='20'
      />

      {covers.map((g, i) => {
        const vy = Math.floor(i / columns) * coverHeightWithPadding + initial
        const vx = (i * coverWidthWithPadding) % (columns * coverWidthWithPadding)
        return (
          <rect
            key={i}
            x={vx}
            y={vy}
            rx='0'
            ry='0'
            width={coverWidth}
            height={coverHeight}
          />
        )
      })}
    </ContentLoader>
  )
}

export const LoaderDetail = () => (
  <ContentLoader
    viewBox='0 0 400 160'
    height={500}
    width={400}
    backgroundColor='#fafafa'
  >
    <circle cx='150' cy='100' r='10' />
    <circle cx='194' cy='100' r='10' />
    <circle cx='238' cy='100' r='10' />
  </ContentLoader>
)
