import zstd

class Zs():
    def Decompress(data: bytes) -> bytes:
        print(f"{__class__.__name__} -> Decompress()")
        return zstd.decompress(data)

    def Compress(data: bytes) -> bytes:
        print(f"{__class__.__name__} -> Compress()")
        return zstd.compress(data)