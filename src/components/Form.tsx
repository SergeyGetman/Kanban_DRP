import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { TextField, Grid, Button, Box } from '@mui/material';
import { validationSchema } from '../validate_rools/validate';

import { CustomTextEnum } from '../types/enam';

import { toast, ToastContainer } from 'react-toastify';
import { CircularStyle, FormStyle } from '../../Index.style';
import { yupResolver } from '@hookform/resolvers/yup';
import Uploads from './InputFileUpload';
import SceletonComponent from '../librariesComponent/Scelet';
import MockUserComponent from '../librariesComponent/MockUserComponent';
export const Forms = () => {
  const [showModal, setShowModal] = useState(true);
  const notify = () => toast(CustomTextEnum.textMessage);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      autor: '',
      priority: '',
      deadline: '' || null || undefined,
    },
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = (data: any) => {
    if (data) {
      reset();
      notify();
      setShowModal(false);
    }
  };

  return showModal ? (
    <FormStyle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Title"
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name="autor"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Autor"
                  error={!!errors.autor}
                  helperText={errors.autor?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="priority"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Priority"
                  type="number"
                  error={!!errors.priority}
                  helperText={errors.priority?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="Deadline"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Deadline"
                  type="number"
                  error={!!errors.deadline}
                  helperText={errors.deadline?.message}
                  component={MockUserComponent}
                />
              )}
            />
          </Grid>
          <CircularStyle>
            <SceletonComponent />
          </CircularStyle>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Button type="submit" variant="contained">
            {CustomTextEnum.Submit}
          </Button>
          <Uploads />
        </Box>
      </form>
    </FormStyle>
  ) : (
    <ToastContainer />
  );
};

export default Forms;
