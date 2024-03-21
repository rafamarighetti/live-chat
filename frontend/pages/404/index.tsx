import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {Grid} from "@mui/material";

import pageNotFound from "./404.style";

const error = () => {
  const classes = pageNotFound();

  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Grid
        container
        justifyContent='center'
        flexDirection='column'
        className={classes.main}
      >
        <h1 className={classes.title}>página não encontrada!</h1>
        <p className={classes.link}>
          <Link href="/main">Voltar para página Principal</Link>
        </p>
      </Grid>
    </>

  );
};

export default error;