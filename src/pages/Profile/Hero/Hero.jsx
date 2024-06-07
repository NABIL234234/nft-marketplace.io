import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileInfo } from "../../../store/slices/nft";
import "./Hero.css";
import GetStart from "../../../components/buttons/GetStart";

// Изображения
import Anumakid from "../../../assets/IMAGE/SECTION/Anumakig_profile.png";
import Copy from "../../../assets/IMAGE/PLAY.SVG/nav/Copy.svg";
import Plus from "../../../assets/IMAGE/PLAY.SVG/nav/Plus.svg";
import Globe from "../../../assets/IMAGE/PLAY.SVG/nav/Globe.svg";
import Discord from "../../../assets/IMAGE/SECTION/Discord.svg";
import Youtube from "../../../assets/IMAGE/SECTION/Youtube.svg";
import Twitter from "../../../assets/IMAGE/SECTION/Twitter.svg";
import Instagram from "../../../assets/IMAGE/SECTION/instagram.svg";
import { useParams } from "react-router";

export default function Hero() {
  const {id} = useParams()
  const dispatch = useDispatch();
  const { profile, loading, error } = useSelector((state) => state.nft);

  useEffect(() => {
    // Проверяем, что id существует и является числом перед отправкой запроса
    if (id) {
      dispatch(fetchProfileInfo(id));
    } else {
      console.error('ID должен быть числом');
    }
    console.log('get date')
  }, [dispatch, id]);

  // Пока идет загрузка, отображаем соответствующее сообщение
  if (loading) {
    return <div>Загрузка...</div>;
  }

  // Если профиль не найден, отображаем соответствующее сообщение
  if (!profile) {
    return <div>Профиль не найден</div>;
  }


  return (
    <>
      <div className="HeaderChannel" />
      <div className="max-w-6xl mx-auto px-5 font-mono">
        <div className="absolute top-[370px] lgg:top-[393px] z-[1] ">
          <img
            src={profile?.profileImage || Anumakid}
            alt={profile?.username || "Профиль"}
          />
        </div>
        <div className="pt-[80px]">
          <div className="block mdd:flex items-center">
            <h2 className="text-white text-6xl font-semibold">
              {profile?.username || "Неизвестный пользователь"}
            </h2>
            <div className="flex gap-[20px] ml-auto">
              <div>
                <GetStart imgUrl={Copy} desc={"0xc0e3b79c"} />
              </div>
              <div className="flex w-full mb:w-48 items-center justify-center gap-3 rounded-xl text-white border-2 border-purple-500 p-2 mt-6">
                <img src={Plus} alt="Rocket" />
                <a href="#">Follow</a>
              </div>
            </div>
          </div>
          <div className="flex gap-[8px] sm:gap-[40px] smm:gap-[15px] mt-[30px] text-xl smm:text-2xl text-white">
            <div>
              <h2 className="font-semibold">{profile?.volume || 0}+</h2>
              <h2 className="text-sm smm:text-xl">Объем</h2>
            </div>
            <div>
              <h2 className="font-semibold">{profile?.soldNfts || 0}+</h2>
              <h2 className="text-sm smm:text-xl">Продано NFT</h2>
            </div>
            <div>
              <h2 className="font-semibold">{profile?.followersCount || 0}+</h2>
              <h2 className="text-sm smm:text-xl">Подписчики</h2>
            </div>
          </div>
          <div className="pt-[30px]">
            <h4 className="text-stone-400 text-lg">Биография</h4>
            <p className="text-white">{profile?.bio || "Нет биографии"}</p>
          </div>
          <div className="pt-[30px]">
            <h4 className="text-stone-400 text-lg">Ссылки</h4>
            <div className="w-22% flex gap-[12px] pt-[5px]">
              {profile?.website && (
                <a href={profile?.website}>
                  <img src={Globe} alt="Globe" />
                </a>
              )}
              {profile.discord && (
                <a href={profile.discord}>
                  <img src={Discord} alt="Discord" />
                </a>
              )}
              {profile.youtube && (
                <a href={profile.youtube}>
                  <img src={Youtube} alt="Youtube" />
                </a>
              )}
              {profile.twitter && (
                <a href={profile.twitter}>
                  <img src={Twitter} alt="Twitter" />
                </a>
              )}
              {profile.instagram && (
                <a href={profile.instagram}>
                  <img src={Instagram} alt="Instagram" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="flex mt-[80px]">
          <div className="flex justify-center items-center gap-[16px] w-[525px] pb-[14.5px]">
            <h3 className="text-white font-semibold">Создано</h3>
            <div className="hidden mb:flex bg-zinc-400 w-[47px] pt-0.5 pb-0.5 px-2.5 rounded-full">
              <h5 className="text-white">{profile?.createdNfts?.length || 0}</h5> 
            </div>
          </div>
          <div className="flex justify-center items-center gap-[16px] w-[525px] pb-[14.5px]">
            <h3 className="text-stone-400 font-semibold">Принадлежит</h3>
            <div className="hidden mb:flex bg-zinc-400 w-[37px] pt-0.5 pb-0.5 px-2.5 rounded-full">
              <h5 className="text-white">{profile?.ownedByNfts?.length || 0}</h5>
            </div>
          </div>
          <div className="flex justify-center items-center gap-[16px] w-[525px] pb-[14.5px]">
            <h3 className="text-stone-400 font-semibold">Коллекция</h3>
            <div className="hidden mb:flex bg-zinc-400 w-[37px] pt-0.5 pb-0.5 px-2.5 rounded-full">
              <h5 className="text-white">{profile?.collection?.length || 0}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
