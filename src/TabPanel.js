import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NextHoursCard from './NextHoursCard';
import NextFiveDaysCard from './NextFiveDaysCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="RIO DE JANEIRO" {...a11yProps(0)} />
          <Tab label="BEIJING" {...a11yProps(1)} />
          <Tab label="LOS ANGELES" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <div className="img-background">
      <TabPanel value={value} index={0}>
        <NextHoursCard city="Rio de Janeiro" latitude={-22} longitude={-42.5}/>
        <NextFiveDaysCard latitude={-22} longitude={-42.5}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <NextHoursCard city="Beijing" latitude={39.9075} longitude={116.3972}/>
      <NextFiveDaysCard city="Beijing" latitude={39.9075} longitude={116.3972}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <NextHoursCard city="Los Angeles" latitude={34.0522} longitude={-118.2437}/>
      <NextFiveDaysCard city="Los Angeles" latitude={34.0522} longitude={-118.2437}/>
      </TabPanel>
      </div>
    </Box>
  );
}
