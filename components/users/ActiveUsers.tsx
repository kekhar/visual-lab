"use client";

import { useMemo } from "react";
import { generateRandomName } from "@/lib/utils";
import Avatar from "./Avatar";
import { useOthers, useSelf } from '@liveblocks/react';
import styles from "./index.module.css";

const ActiveUsers = () => {
	const others = useOthers();
	const currentUser = useSelf();

	const memoizedUsers = useMemo(() => {
	const hasMoreUsers = others.length > 2;

    return (
      <div className='flex items-center justify-center gap-1 py-2'>
        {currentUser && (
          <Avatar name='Ты' otherStyles='border-[3px] border-primary-green' />
        )}

        {others.slice(0, 2).map(({ connectionId }) => (
          <Avatar
            key={connectionId}
            name={generateRandomName()}
            otherStyles='-ml-3'
          />
        ))}

        {hasMoreUsers && (
          <div className={styles.more}>
            +{others.length - 2}
          </div>
        )}
      </div>
    );
  }, [others.length]);

  return memoizedUsers;
};

export default ActiveUsers;