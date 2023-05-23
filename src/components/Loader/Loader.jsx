import { Blocks } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Blocks
      visible={true}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
  );
}
