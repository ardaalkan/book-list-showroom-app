import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { BOOK_DETAILS_URL } from "../API";
import useFetch from "../hooks/useFetch";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface bookType {
  title: string;
  image_url: string;
  description: string;
  authors: string;
  genres: string;
}

const BookDetails = () => {
  // const { loading } = useFetch();
  const [book, setBook] = useState<bookType>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${BOOK_DETAILS_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [id]);

  console.log(book?.title);

  return (
    <>
      <div className="w-3/5 m-auto mt-5 min-h-[125vh]">
        <div className="w-1/3 m-auto">
          <h2 className="font-bold text-2xl text-blue-600">{book?.title}</h2>
          <img
            className="h-[340px] m-auto mt-6"
            src={book?.image_url}
            alt="url"
          />
        </div>
        <div className="w-2/3 mt-12 text-left m-auto mb-5">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Book Detail</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="mb-4">{book?.description}</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Author</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="mb-4">{book?.authors}</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Genres</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className="mb-4">{book?.genres}</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
