import React, { useEffect, useState } from 'react';

const NAMESPACE = 'rupak-portfolio';
const KEY = 'site-views';

const ViewCounter = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
      .then(res => res.json())
      .then(data => setViews(data.value));
  }, []);

  return (
    <span>
      {views !== null ? `👁️ ${views} views` : 'Loading views...'}
    </span>
  );
};

export default ViewCounter; 