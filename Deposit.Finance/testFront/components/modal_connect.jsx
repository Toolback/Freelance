import Image from "next/image";
import { useEffect } from "react";
import metamaskLogo from '../img/metamask.svg';
import "../styles/modaleConnect.module.css"
export default function ModalConnect({ setDropdownConnect }) {
    // const { address, connectToWallet, error } = useContext(WalletContext);
    // useEffect(() => {
    //   if (address) closeModal();
    // }, [address, closeModal]);

    const connectToWallet = () => { }

    return (
        <div className="absolute z-50 w-screen h-screen bg-black/70" onClick={() => setDropdownConnect(false)} >
        <div
            className="relative top-1/4 z-50  mx-auto w-[440px] max-w-full rounded-lg bg-slate-900 px-9 py-16"
            // {...props}
        >
            <div onClick={() => setDropdownConnect(false)} className="text-white text-lg cursor-pointer absolute right-10 top-8">X</div>
            <h2 className="mb-4 text-center text-2xl font-medium uppercase text-white">
                Connect Wallet
            </h2>
            <p className="text-center text-sm leading-loose tracking-tight text-gray-400">
                By connecting your wallet, you agree to our Terms of Service and our
                Privacy Policy.
            </p>

            <div
                className="mt-12 flex h-14 w-full cursor-pointer items-center justify-between rounded-lg bg-gradient-to-l from-[#ffdc24] to-[#ff5c00] px-4 text-base text-white transition-all hover:-translate-y-0.5"
                onClick={connectToWallet}
            >
                <span>MetaMask</span>
                <span className="h-auto w-9">
                    <Image src={metamaskLogo} alt="metamask" />
                </span>
            </div>

            {/* {error && (
          <p className="mt-3 text-center text-xs text-red-500">
            Please install Metamask plugin in your browser in order to connect
            wallet.
          </p>
        )} */}
        </div>
        </div>
    );
}