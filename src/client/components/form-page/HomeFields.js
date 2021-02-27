import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CustomSelect, CustomTextField } from './inputs';

export default function HomeFields({ inputProps, dependencies }) {
  return (
    <>
      <Grid item xs={12} sm={4}>
        <CustomTextField name="lastName" label="Last Name" {...inputProps} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CustomSelect
          name="model"
          label="Model"
          {...inputProps}
          options={dependencies.model}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CustomSelect
          name="builder"
          label="Builder"
          {...inputProps}
          options={dependencies.builder}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <CustomTextField
          type="number"
          name="drywallFootage"
          label="Drywall Footage"
          {...inputProps}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <CustomTextField
          type="number"
          name="footHouse"
          label="Foot House"
          {...inputProps}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <CustomTextField
          type="number"
          name="footGarage"
          label="Foot Garage"
          {...inputProps}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <CustomTextField
          type="number"
          name="footExterior"
          label="Foot Exterior"
          {...inputProps}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <CustomSelect
          name="zone"
          label="Zone"
          {...inputProps}
          options={dependencies.zone}
        />
      </Grid>
    </>
  );
}
