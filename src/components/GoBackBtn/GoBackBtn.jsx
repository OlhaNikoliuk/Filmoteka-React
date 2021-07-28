import { useHistory, useLocation } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';

import { Button } from './GoBackBtn.styled';

function GoBackBtn() {
  const history = useHistory();
  const location = useLocation();

  const handleGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };
  return (
    <Button onClick={handleGoBack}>
      <RiArrowGoBackFill size='18' /> 
    </Button>
  );
}

export default GoBackBtn;
