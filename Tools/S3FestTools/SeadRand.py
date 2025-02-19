def u32(x):
    return x & 0xFFFFFFFF

class SeadRandom:
    # sead::Random::init(u32)
    def __init__(self, seed):
        _seed = seed
        self.m_State = [0, 0, 0, 0]
        for i in range(4):
            _seed = u32(0x6C078965 * (_seed ^ u32(_seed >> 30)) + i + 1)
            self.m_State[i] = _seed
    
    # sead::Random::getU32()
    def getU32(self) -> int:
        v1 = self.m_State[0] ^ u32(self.m_State[0] << 11)
        self.m_State[0] = self.m_State[1]
        v2 = self.m_State[3]
        v3 = v1 ^ (v1 >> 8) ^ v2 ^ (v2 >> 19)
        self.m_State[1] = self.m_State[2]
        self.m_State[2] = v2
        self.m_State[3] = v3
        return u32(v3)