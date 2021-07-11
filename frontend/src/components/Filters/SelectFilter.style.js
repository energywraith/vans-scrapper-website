export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    // width: 200
  }),
  control: styles => ({ 
    ...styles, 
    backgroundColor: 'white',
    width: "auto"
  }),
  multiValue: (styles, { data }) => {
    return {
      ...styles,
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
}