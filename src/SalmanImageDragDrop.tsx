/* eslint-disable max-len */

import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

interface filewrapperInterface {
  error?: boolean;
  height?: string;
  minHeight?: string;
}
const FileWrapper = styled(Box)(
  ({ error, height, minHeight }: filewrapperInterface) => ({
    position: 'relative',
    display: 'flex',
    color: 'grey',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1px',
    height: `${height ? height : '204px'}`,
    minHeight: minHeight,
    marginTop: '16px',
    borderRadius: '5px',
    overflow: 'hidden',
    border: `2px dashed ${error ? 'red' : 'grey'}`,

    '&:hover': {
      borderColor: `${error ? 'red' : 'blue'}`,
    },
    '& input': {
      position: 'absolute',
      top: 0,
      left: 0,
      fontSize: '400px',
      cursor: 'pointer',
      opacity: 0,
    },
  })
);
const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});
export interface SalmanDragDropInterface {
  onchange: (file: any) => void;
  helperText?: string;
  error?: boolean;
  height?: string;
  minHeight?: string;
}

const IMAGE_TYPES = ['image/jpg', 'image/jpeg', 'image/png'];

const SalmanImageDragDrop = ({
  onchange,
  onBlur,
  helperText,
  error = false,
  minHeight,
  height = '204px',
}: SalmanDragDropInterface | any) => {
  const [mediaFile, setMediaFile] = React.useState<any>();

  const handleFile = (e: any) => {
    if (onchange) {
      onchange(e.target.files[0]);
    }
    if (IMAGE_TYPES.includes(e.target.files[0].type)) {
      if (e.target.files.length !== 0) {
        const reader = new FileReader();
        reader.onload = (ee: any) => {
          setMediaFile(ee.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  };
  return (
    <div
      className="salmanImageDragDrop-root"
      style={{ fontFamily: "'roboto',sans-serif" }}
    >
      <label htmlFor="SalmandragdropFileinput">Image Here:</label>
      <FileWrapper error={error} height={height} minHeight={minHeight}>
        <input
          type="file"
          className="SalmandragdropFile-input"
          id="SalmandragdropFileinput"
          accept="image/png, image/jpg, image/jpeg"
          onChange={handleFile}
          onBlur={onBlur ? onBlur : null}
        />

        {mediaFile ? (
          <Image src={mediaFile} alt={'img'} />
        ) : (
          <>
            <Box>
              <CameraAltIcon />
              {/* <img src={iconImage} width={40} alt="icon" /> */}
            </Box>
            <Box>
              <Typography variant="body1" color="initial">
                Drag and Drop Image Here or
                <Typography variant="body1" color="primary" component={'span'}>
                  Click to Browse
                </Typography>
              </Typography>
              <ul>
                <li>
                  <p>JPG, PNG</p>
                </li>
                <li>
                  <p>Image will be cropped in 3:1 ratio</p>
                </li>
              </ul>
            </Box>
          </>
        )}
      </FileWrapper>
      {error && helperText && (
        <span style={{ paddingLeft: '10px', color: 'red' }}>{helperText}</span>
      )}
    </div>
  );
};

export { SalmanImageDragDrop };
