

// A helper function to get the status styles based on the project status
const getStatusStyles = (status) => {
  switch (status) {
    case 'Done':
      return 'bg-green-500 text-white';
    case 'In Progress':
      return 'bg-yellow-500 text-white';
    case 'Cancelled':
      return 'bg-red-500 text-white';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

import PropTypes from 'prop-types';

const ProjectsTable = ({ projects }) => {
  return (
    <div className="overflow-x-auto container max-w-3xl shadow-md">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        {/* Table header */}
        <thead>
          <tr className="text-left border-b border-gray-200 text-gray-600 text-sm leading-normal">
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Start Date</th>
            <th className="py-3 px-6">End Date</th>
            <th className="py-3 px-6">Status</th>
            <th className="py-3 px-6">Assignee</th>
          </tr>
        </thead>

        {/* Table body */}
        <tbody className="text-sm font-light">
          {projects.map((project, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6">{project.name}</td>
              <td className="py-3 px-6">{project.startDate}</td>
              <td className="py-3 px-6">{project.endDate}</td>
              <td className="py-3 px-6">
                <span className={`py-1 px-2 rounded-md text-xs ${getStatusStyles(project.status)}`}>
                  {project.status}
                </span>
              </td>
              <td className="py-3 px-6">{project.assignee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
ProjectsTable.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      assignee: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectsTable;
