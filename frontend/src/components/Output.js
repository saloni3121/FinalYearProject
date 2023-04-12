import React from 'react';
// import { makeStyles } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

function createData(col1, col2) {
  return { col1, col2 };
}

const rows = [
  createData('Summary', 'The author is passiThe document is a personal statement of a computer engineering graduate student who is passionate about exploring the science and information systems behind machines, especially in the field of Human-Computer Interaction (HCI). The author has interest in HCI is inspired by the impact of interface design on making technology more accessible and efficient for untrained communities. The author shares examples of their projects, including The Virtual Clinic project, a web application that utilizes AI-driven chatbot to provide consultation between doctors and patients, and a website and a cross-platform application aimed at boosting education in rural areas. The author also highlights their research interests in Computer Vision, Natural Language Processing, and Creative Technologies. The author seeks a graduate career in a program that aligns with their interests, skills, and ambitions, particularly in health and wellness and Scalable End Host Networking projects. The author also mentions their participation in hackathons and other events, including winning a national-level hackathon organized by JP Morgan and Chase.onate about exploring Human-Computer Interaction, a multidisciplinary field combining cognitive science, psychology, and technology. The author developed The Virtual Clinic, an AI-driven web application that increases the number of virtual visits by 24%. The author also engineered a website and an application that serves and raises money for children with congenital blindness and boosts education in rural areas. The author has an undergraduate degree in Computer Engineering provided knowledge in various subjects, including human-computer interaction, information security, and processor organization architecture. The author has research interests are in Computer Vision and Natural Language Processing. They participated in various hackathons, such as JP Morgan and Chase Code for Good hackathon. The author wishes to pursue graduate studies in a field aligned with their ambitions and pre-acquired skills.'),
  createData('Rouge-1 F1 Score', '0.79625'),
  createData('Rouge-1 Recall Score', '0.83621'),
  createData('Rouge-1 Precision Score', '0.96147'),
  createData('Rouge-2 F1 Score', '0.71263'),
  createData('Rouge-2 Recall Score', '0.79631'),
  createData('Rouge-2 Precision Score', '0.93648'),
  createData('Rouge-L F1 Score', '0.79365'),
  createData('Rouge-L Recall Score', '0.73264'),
  createData('Rouge-L Precision Score', '0.86124'),
  createData('BertScore F1 Score', '0.86932'),
  createData('BertScore Recall Score', '0.82649'),
  createData('BertScore Precision Score', '0.93168'),
];

export default function BasicTable() {
  // const classes = useStyles();

  return (
    <Table  aria-label="simple table" style={{width: "1050px"}}>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.col1} >
            <TableCell component="th" scope="row" style={{color:"#ffffff", textAlign:"center"}}>
              {row.col1}
            </TableCell>
            <TableCell align="right" style={{color:"#ffffff", textAlign:"center"}}>{row.col2}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
