import React, {useState} from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import {Alert, Button, Grid, Snackbar, TextField} from "@mui/material";
import {Formik, FormikValues} from "formik";
import Link from "next/link";

import {api} from "../../interceptor";
import {stringToColor} from "../../helpers/createAvatar";
import registrationStyles from "./registration.style"
import QuickreplyIcon from "@mui/icons-material/Quickreply";

const Registration = () => {
  const classes = registrationStyles();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [regError, setRegError] = useState<string>('error')
  const [regSuccess, setRegSuccess] = useState<string>('success')

  const handleClose = ():void => {
    setOpen(false);
  };

  const createError = (error: string):void => {
    setRegError(error);
    setRegSuccess('');
    setOpen(true);
  }

  const createSuccess= (success: string):void => {
    setRegSuccess(success)
    setRegError('');
    setOpen(true);
  }

  const register = async (values: FormikValues):Promise<void> => {
    try {
      const response = await api.post('http://localhost:5001/authorization/reg', {
        name: values.name,
        surname: values.surname,
        email: values.email,
        password: values.password,
        color: stringToColor(values.name),
      })
      if (response.data) {
        createSuccess('Usuário cadastrado com sucesso!')
        setInterval(() => {
          router.push(`/login`)
        }, 1000);
      } else {
        createError('Usuário já cadastrado.')
      }
    } catch (e: any) {
      console.log(e)
    }
  }

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <Grid
        container
        height='100vh'
        width='100%'
        justifyContent='center'
        alignItems='center'
      >
        <Grid
           container
           justifyContent="center"
           flexDirection="column"
           alignItems="center"
           className={classes.wrapper}
        >
          <h1 className={classes.h1}>Cadastro Live Chat <QuickreplyIcon color={'secondary'} /></h1>
          <Formik
            initialValues={{name: '', surname: '', email: '', password: '', passwordRepeat: '', photo: '' }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.password === values.passwordRepeat) {
                // console.log(values)
                register(values)
              } else {
                createError('As senhas não conferem')
              }
            }}
          >
            {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
              <form
                className={classes.form}
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSubmit()
                }}
              >
                <Grid className={classes.el} mb={1.5}>
                  <TextField
                    label="Nome"
                    variant="outlined"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item className={classes.el} mb={1.5}>
                  <TextField
                    className={classes.el}
                    label="Sobrenome"
                    variant="outlined"
                    type="text"
                    name="surname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surname}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item className={classes.el} mb={1.5}>
                  <TextField
                    className={classes.el}
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item className={classes.el} mb={1.5}>
                  <TextField
                    className={classes.el}
                    label="Senha"
                    variant="outlined"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item className={classes.el} mb={1.5}>
                  <TextField
                    className={classes.el}
                    label="Confirmar senha"
                    variant="outlined"
                    type="password"
                    name="passwordRepeat"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordRepeat}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item className={classes.el} mb={1.5}>
                  <Button
                    className={classes.el}
                    color={'secondary'} 
                    variant="contained"
                    type="submit"
                  >
                    Cadastrar
                  </Button>
                </Grid>
                <Link href='/login'>
                  <a className={classes.link}>Acessar minha conta</a>
                </Link>
              </form>
            )}
          </Formik>
        </Grid>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={regError &&'error' || regSuccess && 'success'} sx={{ width: '100%' }}>
            {regError || regSuccess}
          </Alert>
        </Snackbar>
      </Grid>
    </>
  );
};

export default Registration;