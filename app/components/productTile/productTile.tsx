import { HeartIcon } from "lucide-react"
import styles from "./productTile.module.scss"
import clsx from "clsx"
import { useState } from "react"
import { Product } from "@/app/types/types"

type ProductTileProps = {
    className?: string,
    product: Product,
}

export function ProductTile({ className, product }: ProductTileProps) {
    const [likedProduct, setLikedProduct] = useState(false);

    const toggleLikeProduct = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent the link from being followed
        setLikedProduct((prev) => !prev);
    };

    return (
        <div className={styles.productTile}>
            <div key={product.ProductID} className={clsx(styles.productTileContainer, className)}>
                <div className={styles.heartIconContainer}>
                    <HeartIcon onClick={toggleLikeProduct} className={clsx(styles.heartIcon, likedProduct && styles.likedProduct)} />
                </div>
                <img className={styles.productTilePicture} src={product.ProductPicture} alt={product.ProductName} />
                <div className={styles.productTileName}>{product.ProductName}</div>
                <div className={styles.priceContainer}>{`$${product.Price}`}</div>
                <div className={styles.brandContainer}>
                    <div className={styles.brandTag}>{product.Brand}</div>
                </div>
            </div>
        </div>
    )
}