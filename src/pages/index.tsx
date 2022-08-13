import { Button, Card, CardContent, CircularProgress, Grid } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';

export default function Home() {
  return (
    <Card>
      <CardContent>
        <Formik
          initialValues={{
            title: '',
            description: '',
          }}
          onSubmit={async (values) => {
            console.log('my values: ', values)
            return new Promise((res) => setTimeout(res, 2500))
          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form autoComplete="off">
              <h1>Hello User!</h1>
              <Grid container direction='column' spacing={2}>
                <Grid item>
                  <Field fullWidth name="title" component={TextField} label="Title" />
                </Grid>
                <Grid item>
                  <Field fullWidth name="description" component={TextField} label="Description" />
                </Grid>

                <Grid item>
                  <Button 
                    type='submit' 
                    variant='contained' 
                    color='primary'
                    disabled={isSubmitting}
                    startIcon={isSubmitting ? <CircularProgress size="0.8rem" /> : undefined}
                  >
                    {isSubmitting ? 'Sending' : 'Submit'}
                  </Button>
                </Grid>
              </Grid>

              <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
