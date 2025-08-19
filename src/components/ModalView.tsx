import React from 'react';
import { Modal } from '@mui/material';
import { WindowForButtonStyle, WindowModalStyle } from './ModalWindow.style';
import { useNavigate } from 'react-router-dom';

import { CustomButtonTextEnum, CustomTextEnum } from '../../enam';
import { HeaderAppStyle } from '../../Index.style';
import { useSelector } from 'react-redux';
import { AccountPagesState } from '../types';
import Forms from './Form';

export const ModalWindow = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const stepper = useSelector((state: AccountPagesState | any) => state.globalState.count);

  const navigate = useNavigate();

  const handleChangeStepMinus = () => {
    navigate('/');
  };

  return (
    <>
      <HeaderAppStyle step={stepper}>
        <WindowForButtonStyle>
          <ButtonElement text={CustomTextEnum.openModal} handleClick={handleOpen} variant="contained" />
          <ButtonElement
            text={CustomButtonTextEnum.titlePrev}
            handleClick={handleChangeStepMinus}
            variant="contained"
          />
        </WindowForButtonStyle>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <WindowModalStyle>
            <Forms />
          </WindowModalStyle>
        </Modal>
      </HeaderAppStyle>
    </>
  );
};

export default ModalWindow;
