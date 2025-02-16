import { useEffect, useState } from 'react';
import { MailIcon, UploadCloud as UploadCloudIcon, X } from "lucide-react";
import Hr from '../../../components/Hr';
import SubFormHeader from './shared/subFormHeader';


const UploadImage = ({ selectedImage, setSelectedImage, previewUrl, setPreviewUrl }) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        // Load saved image from localStorage on component mount
        const savedImage = localStorage.getItem('previewUrl');
        if (savedImage) {
            setPreviewUrl(savedImage);
        }
    }, []);

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleImageSelect = async (event) => {
        const file = event.target.files[0];

        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                setError('Please select an image file');
                return;
            }

            // Validate file size (5MB limit)
            if (file.size > 5 * 1024 * 1024) {
                setError('Image size should be less than 5MB');
                return;
            }

            try {
                const base64String = await convertToBase64(file);
                setSelectedImage(file);
                setPreviewUrl(base64String);
                localStorage.setItem('previewUrl', base64String);
                setError(null);
            } catch (err) {
                setError('Error processing image');
            }
        }
    };

    const handleDrop = async (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];

        if (file) {
            if (!file.type.startsWith('image/')) {
                setError('Please drop an image file');
                return;
            }

            if (file.size > 5 * 1024 * 1024) {
                setError('Image size should be less than 5MB');
                return;
            }

            try {
                const base64String = await convertToBase64(file);
                setSelectedImage(file);
                setPreviewUrl(base64String);
                localStorage.setItem('previewUrl', base64String);
                setError(null);
            } catch (err) {
                setError('Error processing image');
            }
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const removeImage = () => {
        setSelectedImage(null);
        setPreviewUrl(null);
        localStorage.removeItem('previewUrl');
        setError(null);
    };

    const handleUpload = async () => {
        if (!selectedImage) {
            setError('Please select an image first');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedImage);

        try {
            // Simulated upload delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Image uploaded successfully!');
            removeImage();
        } catch (error) {
            setError('Failed to upload image. Please try again.');
        }
    };

    return (
        <div className="w-full">
            <div className="p-6 flex flex-col text-white gap-8 bg-[#052228] rounded-[24px]">
                <h2 className="text-[16px]">Upload Profile Photo</h2>

                <div className="w-full bg-black/20">
                    <div
                        className="p-6 text-center flex flex-col justify-center items-center gap-4 bg-[#0E464F] mx-auto rounded-[32px] overflow-hidden w-full max-w-[240px] bg-cover bg-center bg-no-repeat aspect-square relative"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        style={{ backgroundImage: `url(${previewUrl})` }}
                    >
                        <>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageSelect}
                                className="hidden"
                                id="image-input"
                            />
                            <label
                                htmlFor="image-input"
                                className={
                                    previewUrl
                                        ? "cursor-pointer absolute opacity-0 hover:bg-black/30 hover:opacity-[100%] w-full h-full flex flex-col p-6 items-center justify-center"
                                        : "cursor-pointer w-full h-full flex flex-col items-center justify-center"
                                }
                            >
                                <UploadCloudIcon className="w-8 h-8" />
                                <p className="text-[16px] text-white">
                                    Drag & drop or click to upload
                                </p>
                            </label>
                        </>
                    </div>
                </div>

                {error && (
                    <div className="text-red-400 text-sm text-center">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
};



function EnterName({ name, onChange, error }) {
    return (
        <div className="flex text-white flex-col gap-2">
            <h2 className="text-[16px]">Enter your name</h2>
            <input
                type="text"
                value={name}
                onChange={onChange}
                className="rounded-[12px] text-[16px] block p-3 bg-transparent border border-[#07373F]"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
    );
}

function EnterEmail({ email, onChange, error }) {
    return (
        <div className="flex flex-col gap-2 text-white">
            <h2 className="text-[16px]">Enter your email</h2>
            <div className="relative">
                <MailIcon className="absolute top-3 left-4" />
                <input
                    type="email"
                    value={email}
                    onChange={onChange}
                    className="block w-full p-3 text-[16px] rounded-[12px] pl-12 bg-transparent border border-[#07373F]"
                    placeholder="hello@avioflagos.io"
                />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
    );
}

function AboutProject({ aboutProject, onChange, error }) {
    return (
        <div className="flex flex-col gap-2 text-white">
            <h2 className="text-[16px]">About Project</h2>
            <textarea
                name="about_project"
                value={aboutProject}
                onChange={onChange}
                rows={9}
                id="about_project"
                className="block p-3 rounded-[12px] bg-transparent border border-[#07373F] text-16px w-full"
                placeholder="Textarea"
            ></textarea>
            {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
    );
}

function Next({ onBack, onSubmit }) {
    return (
        <div className="flex flex-col gap-2 sm:flex-row justify-center sm:gap-6">
            <button
                onClick={onBack}
                className="rounded-[8px] capitalize block w-full py-3 px-6 bg-[#041E23] text-white"
            >
                Back
            </button>
            <button
                onClick={onSubmit}
                className="rounded-[8px] capitalize block w-full py-3 px-6 bg-[#2BA4B9] text-white"
            >
                Get My Free Ticket
            </button>
        </div>
    );
}

function AttendeesForm({
    subForm,
    subForms,
    setSubForm,
    name,
    setName,
    email,
    setEmail,
    aboutProject,
    setAboutProject,
    selectedImage,
    setSelectedImage,
    previewUrl,
    setPreviewUrl,
    errors,
    setErrors }) {


    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);
    }, []);

    const validate = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required.";
        }

        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email address.";
        }

        if (!aboutProject.trim()) {
            newErrors.aboutProject = "Please provide details about your project.";
        }
        setErrors(newErrors)
        if (email.length && name.length && aboutProject.length) return true
        return false
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            // localStorage.setItem('subForm', 2)
            setSubForm(2)
            localStorage.setItem('subForm', 2)
            console.log("Form submitted:", { name, email, aboutProject });
        }
    };

    const handleBack = (e) => {
        e.preventDefault()
        console.log('pressed')
        localStorage.setItem('subForm', 0)
        setSubForm(0);

    };

    return (
        <div className="bg-[#041E23] px-6 py-8 sm:p-12 rounded-[40px] flex flex-col gap-8 mx-auto w-full max-w-[700px]">
            <SubFormHeader subForm={subForm} subForms={subForms} />

            <div className="p-6 w-full flex flex-col gap-8 bg-[#08252B] rounded-[32px] border border-[#0E464F]">
                <UploadImage selectedImage={selectedImage} setSelectedImage={setSelectedImage} previewUrl={previewUrl} setPreviewUrl={setPreviewUrl} />
                <Hr />
                <EnterName
                    onChange={(e) => setName(e.target.value)}
                    name={name}
                    error={errors.name}
                />
                <EnterEmail
                    onChange={(e) => setEmail(e.target.value)}
                    email={email}
                    error={errors.email}
                />
                <AboutProject
                    onChange={(e) => setAboutProject(e.target.value)}
                    aboutProject={aboutProject}
                    error={errors.aboutProject}
                />
                <Next onBack={handleBack} onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default AttendeesForm;
