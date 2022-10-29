import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../Dashboard';
import { WorkoutDetails } from '../WorkoutDetails';

describe('WorkoutDetails page', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter initialEntries={['/workout/2']}>
        <Routes>
          <Route path="/workout/:id" element={<WorkoutDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByText('Featured Workouts')).not.toBeInTheDocument();
  });

  it('should redirect to dashboard on click go back', async () => {
    render(
      <MemoryRouter initialEntries={['/workout/2']}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workout/:id" element={<WorkoutDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(
      () => {
        const goBack = screen.getByText('Go back');
        fireEvent.click(goBack);
        expect(screen.queryByText('Featured Workouts')).toBeInTheDocument();
      },
      {
        timeout: 2000,
      }
    );
  });
});
