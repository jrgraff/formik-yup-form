import { Button, Card, CardContent, CircularProgress, Grid, Typography } from '@material-ui/core';
import { Field, FieldArray, Form, Formik } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React from 'react';
import * as yup from 'yup';

export default function Home() {
  return (
    <Card>
      <CardContent>
        <Formik
          initialValues={{
            title: '',
            description: '',
            questions: [{ description: '', required: true }]
          }}
          validationSchema={yup.object({
            title: yup.string()
              .required('Title is required')
              .min(5, 'Your title needs to be at leas 5 characters'),
            description: yup.string(),
            questions: yup.array(
              yup.object({
                description: yup.string()
                  .required('Description is required')
              })
            )
              .min(1, 'You need to provide at least 1 question')
          })}
          onSubmit={async (values) => {
            console.log('my values: ', values)
            return new Promise((res) => setTimeout(res, 2500))
          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form autoComplete="off">
              <h1>Create a Form!</h1>
              <Grid container direction='column' spacing={2}>
                <Grid item>
                  <Field fullWidth name="title" component={TextField} label="Title" />
                </Grid>
                <Grid item>
                  <Field fullWidth name="description" component={TextField} label="Description" />
                </Grid>

                <FieldArray name="questions">
                  {({push, remove}) => (
                    <>
                      <Grid item>
                        <Typography variant="body2">Questions:</Typography>
                      </Grid>

                      {values.questions.map((question, index) => (
                        <Grid key={index} container item>
                          <Grid item>
                            <Field 
                              fullWidth
                              name={`questions[${index}].description`}
                              component={TextField}
                              label="Description" 
                            />
                          </Grid>
                          <Grid item>
                            <Field 
                              name={`questions[${index}].required`} 
                              type="checkbox" 
                              component={CheckboxWithLabel} 
                              Label={{label: 'Required'}}
                            />
                          </Grid>
                          <Button disabled={isSubmitting} onClick={() => remove(index)}>Delete</Button>
                        </Grid>
                      ))}

                      <Grid item>
                        {typeof errors.questions === 'string' ? (
                          <Typography color="error">
                            {errors.questions}
                          </Typography>
                        ) : null}
                      </Grid>

                      <Grid item>
                        <Button
                          disabled={isSubmitting}
                          variant="contained"
                          onClick={() => push({description: '', required: true})}
                        >
                          Add Question
                        </Button>
                      </Grid>
                    </>
                  )}
                </FieldArray>

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
