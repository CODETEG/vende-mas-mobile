import { ImageProps, Image } from 'react-native'

export type CImageProps = ImageProps

const CImage = ({ ...rest }: CImageProps) => {
  return <Image {...rest} />
}

export default CImage
