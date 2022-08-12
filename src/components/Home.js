import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';








export default function MultiActionAreaCard() {
    const [value, setValue] = React.useState(new Date());

    const [topic, setTopic] = React.useState('');

    const handleChange = (event) => {
      setTopic(event.target.value);
    };

    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
                <CardContent style={{display:"inline-flex",gridAutoFlow:"column",gridColumnGap:"2%"}}>
                    
                <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Topic</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={topic}
          label="Topic"
          onChange={handleChange}
        >
          <MenuItem value={10}>kafkaton</MenuItem>
          <MenuItem value={20}>test</MenuItem>
          <MenuItem value={30}>mourad</MenuItem>
        </Select>
      </FormControl>
    </Box>


                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker 
                            renderInput={(props) => <TextField {...props} />}
                            label="From"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="To"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </LocalizationProvider>
                </CardContent>
            </CardActionArea>
            <CardActions style={{display:"flex",justifyContent:"center"}}>
                <Button size="small" color="primary">
                    Submit
                </Button>
            </CardActions>
        </Card>
    );
}
