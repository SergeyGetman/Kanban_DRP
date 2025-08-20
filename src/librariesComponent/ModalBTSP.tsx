import React, { FC } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ModalCustomStyle, ModalCustomStyleBTNS } from './ModalST.style';
import { ButtonElement } from '../librariesComponent/ButtonElement';
import LogoCompany from '../assets/imsges/DF.png';
import { Box } from '@mui/material';

type IModalBTSP = {
  text: string;
};

const ModalBtsp: FC<IModalBTSP> = ({ text, ...props }) => {
  console.log('this is props', props);
  return (
    <>
      <ModalCustomStyle classes={'#57595b'}>
        <div className="modal show">
          <Box>
            <img src={LogoCompany} style={{ margin: '10px auto', display: 'block' }} />
          </Box>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>{text}</p>
            </Modal.Body>
            <ModalCustomStyleBTNS>
              <ButtonElement variant="contained" text={'close'} />
              <ButtonElement variant="contained" text={'save changes'} style={{ backgroundColor: 'red' }} />
            </ModalCustomStyleBTNS>

            <Modal.Footer>another props</Modal.Footer>
          </Modal.Dialog>
        </div>
      </ModalCustomStyle>
    </>
  );
};

export default ModalBtsp;
