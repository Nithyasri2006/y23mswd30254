import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import student from './student.jpg';
export default function MediaCard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Card sx={{ width: '30%' }}>
      <CardMedia
        sx={{ height: 300}}
        image={student}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          STUDENT
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Student have skills in <br />
          1.javascript<br />
          2.python <br />
          3.Java<br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">more</Button>
      </CardActions>
    </Card>
    </div>
  );
}
