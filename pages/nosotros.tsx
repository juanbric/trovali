import MetaTag from "@/components/MetaTag";
import Schema from "@/components/Schema";

const about = () => {
  const description =
    "Simplify student permissions with our advanced face recognition technology. Upload photos and forms in one place, easily check permission status and ...";
  const title = "Trovali | Face recognition | Student privacy compliance";
  const date = new Date();
  const image = "https://svgshare.com/i/pdv.svg";

  const headerTitle = "Shaping the management of student photos.";
  const secondTitle =
    "Utilizing the latest technology to streamline student photo management for schools. ";
  const secondSubTitle =
    "The core feature of our application is the ability to automatically identify which students have granted permission for their pictures to be shared externally. This is accomplished by using face detection and recognition technology to analyze the photos that are uploaded to the platform. The platform compares the faces in the photos to a reference photo of each student, and uses this information to determine which students have given permission for their photos to be shared.";
  const secondCopy =
    "The platform also automatically organizes photos by student identity, making it easy for school staff to search and locate any student's photos. This feature is also enabled by our machine learning algorithms to analyze the facial features of each student in the photos and match them to the reference photo. The platform also provides a private database where all the students' photos are stored, in this way, the school staff can access them easily, but they are also protected by a password and an access management system, ensuring that only authorized personnel can access the database.";

  const faceRecognition =
    "Face recognition is a technology that uses computer algorithms to locate and identify human faces in digital images or videos. The technology can be used for a variety of applications, such as security systems, photo tagging, and biometrics. The process of face recognition typically involves three main steps:";
  const featureOneTitle = "Face detection";
  const featureOneDescription =
    "This step involves identifying the presence of a face in an image or video. This is typically done by analyzing the image or video for patterns and features that are commonly associated with faces, such as eyes, noses, and mouths.";
  const featureTwoTitle = "Face alignment";
  const featureTwoDescription =
    "Once a face is detected, it needs to be aligned in a standard position so that it can be easily compared to other faces. This step is done by identifying the key facial landmarks, such as the eyes, nose and mouth, and aligning the face based on these landmarks.";
  const featureThreeTitle = "Face recognition";
  const featureThreeDescription =
    "After the face is aligned, the final step is to compare it to a database of known faces to identify the individual. This is typically done by extracting unique features from the face, such as the distance between the eyes or the shape of the jawline, and comparing these features to a database of known faces.";

  return (
    <>
      <Schema
        title={title}
        date={date}
        image={image}
        description={description}
        articleBody={undefined}
      />
      <MetaTag
        title={title}
        description={description}
        url={URL}
        image={image}
      />

      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <section>
            <div className="md:grid md:grid-cols-2 md:gap-12 ">
              <div className="py-[52px] md:py-[208px] text-center md:text-start">
                <div className="title mb-2">{headerTitle}</div>
              </div>
              <div className="pb-[52px] md:py-[100px] md:pb-0 flex justify-center">
                <img src="/logo.svg" className="rounded-[6px] max-h-[350px]" />
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="shadow-x">
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="pt-[52px] pb-8 md:py-[178px] flex flex-col">
                <img src="/lena.svg" className="max-w-[400px] self-center items-center justify-center rounded-[6px]" />
              </div>
              <div className="pb-[52px] md:py-[128px] ">
              <div className="sub-title pb-8">{secondTitle}</div>

                <div className="mb-6">{secondSubTitle}</div>
                <div className="">{secondCopy}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <section className="pt-[52px] pb-8 md:py-[88px] flex flex-col items-center justify-center">
            <div className="text-start md:grid md:grid-cols-3">
              <p className="title text-[#3c31dd] pb-4 md:col-span-2">
                How our technology works
              </p>
              <h2 className="sub-title mb-16 md:col-span-2">
                {faceRecognition}
              </h2>
            </div>
            <div className="text-start md:grid md:grid-cols-3 md:gap-16">
              <div className="flex flex-col max-w-[370px]">
                <img src="/detection.svg" className="max-w-[160px]" />
                <h2 className="logo pt-6 pb-2">{featureOneTitle}</h2>
                <h3 className="pb-16 md:pb-0">{featureOneDescription}</h3>
              </div>
              <div className="flex flex-col max-w-[370px]">
                <img src="/alignment.svg" className="max-w-[160px]" />
                <h2 className="logo pt-6 pb-2">{featureTwoTitle}</h2>
                <h3 className="pb-16 md:pb-0">{featureTwoDescription}</h3>
              </div>
              <div className="flex flex-col max-w-[370px]">
                <img src="/recognition.svg" className="max-w-[160px]" />
                <h2 className="logo pt-6 pb-2">{featureThreeTitle}</h2>
                <h3 className="pb-16 md:pb-0">{featureThreeDescription}</h3>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default about;
