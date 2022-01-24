import * as React from "react";
import { ItemProps } from './types';
import { fetchTagColor } from '../../utils/generateColor';

export default function ResourceCard({ item }: ItemProps) {
  return (
    <li className="card cursor-pointer text-gray-brand-02 flex flex-col border border-gray-brand-03 rounded-lg transform hover:-translate-y-1 transition-all duration-200">
      <div className="p-3 flex flex-col flex-1">
        <div className="flex flex-wrap justify-between">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-lg break-all text-white">{item.name}</h2>
            <div>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.25 15.25V6.75H8.75"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17 7L6.75 17.25"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 my-2">
          {' '}
          <p className="font-normal text-base text-opacity-50 flex-1">
            {item.description}
          </p>
        </div>
      </div>
      <div className="px-4 py-2 flex flex-col items-end">
        <div className="flex items-center">
          {/* Empty div ==> Decorative purpose */}
          <div
            className={`h-3 w-3 border-2 mr-1 border-${fetchTagColor(
              item.tag,
            )} rounded-full`}
          />
          <div className="text-base flex items-center font-medium text-gray-brand-02 resource-card-tag capitalize">
            {' '}
            {item.tag}
          </div>
        </div>
      </div>
    </li>
  );
}
