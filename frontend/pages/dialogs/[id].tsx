import React, {useEffect, useState} from 'react';
import Head from 'next/head';

import MainMenu from "../../components/mainMenu/mainMenu";
import SendMsg from "../../components/chat/sendMsg/sendMsg";
import Footer from "../../components/footer/footer";
import { Grid } from '@mui/material';

export default function () {
  const [name, setName] = useState<any>('')

  useEffect(() => {
    setName(localStorage.getItem('userName'))
  }, [])

  return (
    <>
      <Head>
        <title>Messages</title>
      </Head>
      <Grid
        container
        flexDirection='column'
        alignItems='center'
        justifyContent='space-between'
        width='100%'
        height='100vh'
        wrap='nowrap'
      >
        <MainMenu name={name} />
        <SendMsg />
        <Footer />
      </Grid>
    </>
  );
};
