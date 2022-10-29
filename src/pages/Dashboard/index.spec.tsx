import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '.';
import { WorkoutDetails } from '../WorkoutDetails';

describe('Dashboard page', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    expect(screen.getByText('Featured Workouts')).toBeInTheDocument();
  });

  it('should redirect to correct workout details page on click', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workout/:id" element={<WorkoutDetails />} />
        </Routes>
      </BrowserRouter>
    );

    const item = screen.getByText('Endurance by Missy Cheatham');

    fireEvent.click(item);

    await waitFor(
      () => {
        const desc = screen.getByText(
          'Enjoy a fun and low impact workout with Missy. We will engage a full body workout and get your heart rate up!'
        );

        expect(desc).toBeInTheDocument();
      },
      {
        timeout: 2000,
      }
    );
  });
});
