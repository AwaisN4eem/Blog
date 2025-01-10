// SubmissionForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../url';

const formData = [
  {
    id: 'title',
    label: 'Title',
    type: 'text',
    placeholder: 'Enter a title for your submission',
    required: true,
    validationHint: 'Limit: 300 characters',
  },
  {
    id: 'coverLetter',
    label: 'Cover Letter',
    type: 'textarea',
    placeholder: 'Enter a cover letter including a short biographical statement...',
    required: true,
  },
  {
    id: 'submissionType',
    label: 'Reprint or Original Fiction',
    type: 'checkbox',
    options: [
      { value: 'original', label: 'Original' },
      { value: 'reprint', label: 'Reprint' },
    ],
    description: 'Please indicate whether your submission has been previously published',
  },
  {
    id: 'fileUpload',
    label: 'Image Upload',
    type: 'file',
    hint: 'Acceptable file types: .jpg, .jpeg, .png, .gif',
    maxFiles: 2,
  },
];

const SubmissionForm = ({ category }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');
  const [title, setTitle] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [submissionType, setSubmissionType] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    // Set the initial category as provided in the props
    setSubmissionType([category]);
  }, [category]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const imageFiles = files.filter((file) =>
      ['image/jpeg', 'image/png', 'image/gif'].includes(file.type)
    );

    if (imageFiles.length > 0) {
      setFile(imageFiles[0]); // If multiple, take only the first valid image file
      const newFiles = imageFiles.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'pending',
      }));

      setUploadedFiles(newFiles);
      setUploadStatus('Uploading image...');

      // Simulate file upload for each valid image
      newFiles.forEach((file) => {
        setTimeout(() => {
          setUploadedFiles((prevFiles) =>
            prevFiles.map((f) =>
              f.name === file.name ? { ...f, status: 'uploaded' } : f
            )
          );
          setUploadStatus('Image uploaded successfully!');
        }, 1000); // Simulate a 1-second upload time
      });
    } else {
      setUploadStatus('Please upload only images (.jpg, .jpeg, .png, .gif).');
    }
  };

  const handleCheckboxChange = (e, optionValue) => {
    if (e.target.checked) {
      setSubmissionType([optionValue]);
    } else {
      setSubmissionType([]);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const post = {
      title,
      coverLetter,
      submissionType,
      categories: [category],
      isOriginal: submissionType.includes('original'),
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;

      try {
        await axios.post(`${URL}/api/upload`, data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post(`${URL}/api/posts/create`, post, { withCredentials: true });
      setUploadStatus('Submission successful!');
    } catch (err) {
      console.log(err);
      setUploadStatus('Error submitting form.');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      {formData.map((field) => (
        <div key={field.id} className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor={field.id}>
            {field.label}
            {field.required && <span className="text-red-500"> (required)</span>}
          </label>

          {field.type === 'text' && (
            <input
              type="text"
              id={field.id}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          )}

          {field.type === 'textarea' && (
            <textarea
              id={field.id}
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              placeholder={field.placeholder}
              rows="4"
              required={field.required}
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          )}

          {field.type === 'checkbox' && (
            <div className="space-y-2">
              {field.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`${field.id}_${option.value}`}
                    name={field.id}
                    value={option.value}
                    checked={submissionType.includes(option.value)}
                    onChange={(e) => handleCheckboxChange(e, option.value)}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor={`${field.id}_${option.value}`} className="text-gray-600">
                    {option.label}
                  </label>
                </div>
              ))}
              <p className="text-gray-500 text-sm mt-2">{field.description}</p>
            </div>
          )}

          {field.type === 'file' && (
            <div>
              <input
                type="file"
                id={field.id}
                accept=".jpg,.jpeg,.png,.gif"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor={field.id}
                className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
              >
                Choose Image
              </label>
              <p className="text-gray-500 text-sm mt-2">{field.hint}</p>

              {uploadStatus && (
                <p className="text-gray-600 font-semibold mt-2">{uploadStatus}</p>
              )}

              {uploadedFiles.length > 0 && (
                <ul className="mt-4">
                  {uploadedFiles.map((file, index) => (
                    <li key={index} className="flex justify-between border-b py-2">
                      <span className="text-gray-700">{file.name}</span>
                      <span className={`text-sm ${file.status === 'uploaded' ? 'text-green-500' : 'text-yellow-500'}`}>
                        {file.status.charAt(0).toUpperCase() + file.status.slice(1)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {field.validationHint && (
            <p className="text-gray-500 text-sm mt-1">{field.validationHint}</p>
          )}
        </div>
      ))}
      <button type="submit" className="bg-black text-white font-semibold px-4 py-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default SubmissionForm;
