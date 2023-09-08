import { Formik } from 'formik';
import PropTypes from 'prop-types';

import {
  ForM,
  List,
  Items,
  Input,
  Label,
  Button,
} from './ContactEditorForm.styled';

export const ContactEditorForm = ({
  initialValues = { name: '', number: '' },
  onSubmit,
}) => {
  const handleSubmit = async (values, actions) => {
    // await onSubmit(values);
    console.log(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <ForM>
            <List>
              <Items>
                <Label htmlFor="name">Name</Label>
                <Input name="name" type="text" id="name" />
              </Items>
              <Items>
                <Label htmlFor="number">Number</Label>
                <Input name="number" type="text" id="number" />
              </Items>
            </List>
            <Button type="submit" disabled={isSubmitting}>
              Saving
            </Button>
          </ForM>
        )}
      </Formik>
    </>
  );
};

ContactEditorForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
