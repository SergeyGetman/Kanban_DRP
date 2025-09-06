import React, { useEffect, useState } from 'react';
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
import { CardInfoUserStyle } from './StyledComponent/CardInfoUser.style';
import Typography from '@mui/material/Typography';
import LogoutButton from './LogOutGoogle';

interface IFormData {
  title: string;
  description: string;
  priority: number | string;
  deadline: string;
}
interface User {
  name: string;
  email: string;
  picture: string;
  id: string;
}

export const Forms = () => {
  const [showModal, setShowModal] = useState(true);
  const notify = () => toast(CustomTextEnum.textMessage);

  const objForHolder = {
    color: 'black !important!',
  };

  const {
    control,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      description: '',
      priority: '',
      deadline: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = (data: IFormData) => {
    if (data) {
      reset();
      notify();
      setShowModal(false);
    }

    const savedForms = JSON.parse(localStorage.getItem('forms') || '[]');
    savedForms.push(data);
    localStorage.setItem('forms', JSON.stringify(savedForms));
  };

  const checkForm = async () => {
    const isValid = await trigger();
    if (isValid) {
      const values = getValues();
      console.log('All values:', values);
    } else {
      console.log('Form has errors:', errors);
    }
  };

  const [user, setUser] = useState<User | null>(null);

  console.log('this is user', user);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      window.location.href = '/';
    }
  }, []);

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return showModal ? (
    <FormStyle>
      <CardInfoUserStyle>
        <Typography sx={{ color: 'white' }}>Welcome, {user.name}! 👋</Typography>
        <img
          src={user.picture}
          alt="avatar"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            margin: '0 auto',
          }}
        />
        <p style={{ color: 'white', marginTop: '10px' }}>
          <strong>Email:</strong> {user.email}
        </p>
      </CardInfoUserStyle>
      <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
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
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Description"
                  error={!!errors.description}
                  helperText={errors.description?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="priority"
              sx={objForHolder}
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
              name="deadline"
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
          <button type="button" onClick={checkForm} style={{ textTransform: 'uppercase', color: '#b6bab0' }}>
            check valid
          </button>
        </Box>
      </form>
    </FormStyle>
  ) : (
    <ToastContainer />
  );
};

export default Forms;
