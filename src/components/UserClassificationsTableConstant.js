import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import UserClassificationsTable from './UserClassificationsTable';
import { fetchClassifications } from '../actions/classificationActions';

const UserClassificationsTableConstant = () => {
  const selectedStudent = useSelector((state) => state.studentSelect.selectedStudent);
  const classifications = useSelector((state) => state.classifications.classifications);
  const loading = useSelector((state) => state.classifications.loading);
  const error = useSelector((state) => state.classifications.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedStudent) {
      dispatch(fetchClassifications(selectedStudent));
    }
  }, [dispatch, selectedStudent]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching user classifications: {error}</div>;
  }

  return <UserClassificationsTable user={classifications} />;
};

export default UserClassificationsTableConstant;

/*const UserClassificationsTableConstant = () => {
  const selectedStudent = useSelector((state) => state.studentSelect.selectedStudent);
  const [classifications, setClassifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClassifications = async () => {
      setLoading(true);

      try {
        if (selectedStudent) {
          console.log("selected student: " + selectedStudent);
          const response = await ClassificationByUserQuery(selectedStudent);
          const data = await response.json();
          console.log(data);
          if (data.errors) {
            throw new Error(data.errors[0].message);
          }
          console.log(data);
          const userClassifications = data.data.acclassificationPageByUser;
          console.log(userClassifications);
          setClassifications(userClassifications);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClassifications();
  }, [selectedStudent]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching user classifications: {error}</div>;
  }

  return <UserClassificationsTable user={classifications} />;
};

export default UserClassificationsTableConstant;*/

