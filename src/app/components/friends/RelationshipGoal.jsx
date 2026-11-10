const RelationshipGoal = ({ friend }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-[#244d3f]">Relationship Goal</h3>
        <button className="btn btn-xs bg-gray-100 border-gray-200 font-normal">
          Edit
        </button>
      </div>
      <p className="mt-3 text-sm text-gray-600">
        Connect every <strong>{friend.goal} days</strong>
      </p>
    </div>
  );
};

export default RelationshipGoal;