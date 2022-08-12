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
    const url = "";
    const [data, setData] = React.useState({
        from:"",
        to:"",
        topic:""
    });

    //const [topic, setTopic] = React.useState('');
    const [value, setValue] = React.useState(new Date());
    // const var1;
   
 console.log(value);
    function handleChange(event) {
        const newData = { ...data };
        newData[event.target.name] = event.target.value;
        //setData.target.name(event.target.value);
        // setData(newData);
        console.log(newData);

    };

    return (
        <Card sx={{ maxWidth: 600 }}>
            <form>
            <CardActionArea>
                <CardContent style={{ display: "inline-flex", gridAutoFlow: "column", gridColumnGap: "2%" }}>

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Topic</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                name="topic"
                                value={data.topic}
                                label="Topic"
                                onChange={(event) => handleChange(event)}
                            >
                                <MenuItem value={"kafkaton"}>kafkaton</MenuItem>
                                <MenuItem value={"test"}>test</MenuItem>
                                <MenuItem value={"mourad"}>mourad</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>


                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="From"
                            value={value}
                            name="from"
                            onChange={(newValue) => {
                                setValue(newValue);
                                handleChange(newValue);
                              }}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="To"
                            value={value}
                            name="to"
                            onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              
                        />
                    </LocalizationProvider>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
                <Button size="small" color="primary">
                    Submit
                </Button>
            </CardActions>
            </form>
        </Card>
    );
}
